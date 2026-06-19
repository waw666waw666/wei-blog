---
tags:
  - AI 教程
  - DeepSeek
---
# DeepSeek 模型使用指南：从 API 调用到本地部署

DeepSeek 最近很火，我也从最早期的版本开始用到现在。这篇文章分享一下我的使用经验，从 API 调用到本地部署都有。

## DeepSeek 是什么

DeepSeek 是深度求索公司开发的大语言模型。和 ChatGPT、Claude 比起来，它的最大优势是**性价比**——API 价格大概是 GPT-4 的十分之一，但效果在某些场景下并不差。

## API 调用

### 获取 API Key

去 [platform.deepseek.com](https://platform.deepseek.com) 注册账号，在控制台创建 API Key。新用户有 500 万 Token 的免费额度，够玩一阵子了。

### 基础调用

用 Python 调 DeepSeek 的 API：

```python
from openai import OpenAI

client = OpenAI(
    api_key="你的 API Key",
    base_url="https://api.deepseek.com"
)

response = client.chat.completions.create(
    model="deepseek-chat",
    messages=[
        {"role": "system", "content": "你是一个编程助手"},
        {"role": "user", "content": "用 Python 写一个斐波那契数列"}
    ]
)
print(response.choices[0].message.content)
```

注意 base_url 要换成 DeepSeek 的地址，API 接口和 OpenAI 是兼容的，所以用 OpenAI 的 SDK 就能直接调。

### 实用参数

几个我常用的参数：

| 参数 | 作用 | 我的常用值 |
|------|------|-----------|
| `temperature` | 控制随机性 | 0.7（聊天），0.1（代码） |
| `max_tokens` | 最大输出长度 | 2048 |
| `top_p` | 核采样 | 0.9 |
| `stream` | 流式输出 | true |

写代码相关的任务我习惯把 temperature 调低，避免 AI"发挥创意"写出不靠谱的代码。

## 本地部署

如果你对隐私有要求，或者想省 API 费用，可以本地跑 DeepSeek。

### 用 Ollama 部署

Ollama 是最简单的本地部署方案：

```bash
# 安装 Ollama
# 下载地址：https://ollama.com

# 拉取 DeepSeek 模型
ollama pull deepseek-r1:7b
# 或者更大参数的版本
ollama pull deepseek-r1:14b

# 运行
ollama run deepseek-r1:7b
```

然后你就可以在本地跟 DeepSeek 对话了。API 也会在本地启动：

```bash
curl http://localhost:11434/api/chat \
  -d '{"model":"deepseek-r1:7b","messages":[{"role":"user","content":"你好"}]}'
```

### 硬件要求

| 模型 | 显存要求 | 内存要求 |
|------|---------|---------|
| 1.5B | 2GB | 4GB |
| 7B | 6GB | 8GB |
| 14B | 10GB | 16GB |
| 70B | 40GB | 64GB |

普通笔记本跑 7B 问题不大，14B 的话最好有独立显卡。

## 实际使用体验

### 代码能力
DeepSeek 的代码能力在国产模型里算是第一梯队。日常的 CRUD、脚本编写、Bug 修复都没问题。复杂架构设计的话，我还是会用 Claude。

### 翻译效果
这是我个人觉得 DeepSeek 最出色的场景。技术文档的中英互译质量很高，而且很便宜。

### 推理能力
R1 系列的推理能力是个亮点。遇到复杂问题，能看到它一步步推理的过程，这点对调试很有帮助。

## 踩坑记录

### API 偶尔不稳定
有段时间 DeepSeek 的 API 经常超时，尤其是晚上高峰期。后来我做了重试机制：

```python
import time
from openai import OpenAI

client = OpenAI(api_key="xxx", base_url="https://api.deepseek.com")

def call_deepseek(messages, retries=3):
    for i in range(retries):
        try:
            response = client.chat.completions.create(
                model="deepseek-chat",
                messages=messages
            )
            return response.choices[0].message.content
        except Exception as e:
            if i < retries - 1:
                time.sleep(2 ** i)
            else:
                raise e
```

### 中文理解比英文好
毕竟是国产模型，中文的理解和生成质量明显优于英文。所以我的做法是：中文问题用 DeepSeek，英文问题用 Claude。

### 长上下文下性能下降
上下文超过 32K 后，回答质量会有明显下降。长文档处理建议分段进行。

## 对比其他模型

| 维度 | DeepSeek | GPT-4 | Claude 3 |
|------|----------|-------|----------|
| 价格 | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| 代码 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 中文 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| 翻译 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| 速度 | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |

## 总结

DeepSeek 是我目前的主力模型之一。不为别的，就冲它的性价比——日常任务用 DeepSeek，复杂任务上 Claude，这个组合在效果和成本之间找到了很好的平衡点。

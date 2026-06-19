# Git 实用技巧：日常开发够用就行

Git 学了忘、忘了学，来回就那么几个命令。这篇文章不写那些复杂的原理，就记录我日常工作中真正用到的 Git 操作。

## 日常三件套

这仨命令覆盖了 80% 的日常需求：

```bash
# 查看状态
git status

# 查看改动
git diff

# 查看历史
git log --oneline --graph -10
```

`git status` 告诉你当前在哪个分支、什么文件改了、什么文件没跟踪。
`git diff` 看具体改了啥。
`git log --oneline --graph` 用图形化方式看提交历史。

我习惯用 `-10` 限制只显示最近 10 条，不然项目大了会刷屏。

## 撤销操作

### 还没 commit

```bash
# 撤销所有未暂存的修改
git checkout -- .

# 撤销单个文件
git checkout -- README.md

# 或者用新版的 restore
git restore README.md
```

### 已经 staged 但没 commit

```bash
# 取消暂存
git reset HEAD .

# 新版用法
git restore --staged .
```

### 已经 commit 了

```bash
# 修改最后一次 commit 信息
git commit --amend -m "新的 commit 信息"

# 撤销最后一次 commit，保留改动
git reset --soft HEAD~1

# 撤销最后一次 commit，不保留改动
git reset --hard HEAD~1
```

`--soft` 和 `--hard` 的区别：soft 保留工作区的改动，hard 直接丢弃。**hard 操作前一定要确认。**

### 已经 push 了

```bash
# 回退后强制推送（谨慎！）
git reset --hard HEAD~1
git push --force
```

**强制推送会覆盖远程历史**，如果别人也在用这个分支，别这么做。替代方案是用 `git revert`：

```bash
# 创建一个反向 commit 来撤销
git revert HEAD
git push
```

`revert` 不会重写历史，更安全。

## 分支操作

### 本地分支

```bash
# 创建新分支
git branch feature-xxx

# 切换分支
git checkout feature-xxx

# 创建并切换（一步到位）
git checkout -b feature-xxx

# 删除本地分支
git branch -d feature-xxx
```

### 远程分支

```bash
# 查看所有分支（包括远程）
git branch -a

# 拉取远程分支到本地
git checkout -b local-name origin/remote-name

# 删除远程分支
git push origin --delete feature-xxx
```

### 合并分支

```bash
# 把 feature 合并到 master
git checkout master
git merge feature-xxx

# 如果有冲突
# 1. 手动解决冲突
# 2. git add .
# 3. git commit
```

## 实用技巧

### 1. 储藏（Stash）

写到一半需要切分支？用 stash：

```bash
# 暂存当前改动
git stash

# 切分支做其他事
git checkout hotfix
# ... 修完回来

# 恢复暂存的改动
git stash pop

# 查看暂存列表
git stash list
```

### 2. 交互式 rebase

合并多个 commit：

```bash
git rebase -i HEAD~3
```

会打开一个编辑器，把想合并的 commit 前的 `pick` 改成 `squash` 或 `s` 就行。

但注意：**rebase 会重写历史**，已经 push 的分支不要 rebase，除非只有你一个人用。

### 3. 查看谁改了某行代码

```bash
git blame src/index.ts
```

查 bug 的时候特别有用，看看最后是谁改了这行代码。

### 4. 搜索提交历史

```bash
# 按关键词搜索 commit
git log --all --grep="bugfix"

# 按文件搜索
git log --all -- src/index.ts

# 按作者搜索
git log --author="Wei"
```

### 5. 忽略已跟踪文件的变化

已经 commit 过的文件，加进 .gitignore 也不会生效。需要：

```bash
# 停止跟踪但不删除本地文件
git rm --cached .env

# 然后加到 .gitignore 里
```

## Git 配置

### 我的全局配置

比较有用的几个配置：

```bash
# 让 git 记住密码（Windows）
git config --global credential.helper manager

# 设置别名
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status

# 设置默认分支名
git config --global init.defaultBranch master
```

### 有用的别名

我用得最多的几个别名：

```bash
# 查看漂亮的日志
git config --global alias.lg "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"

# 查看贡献统计
git config --global alias.count "shortlog -sn"

# 查看未合并的分支
git config --global alias.unmerged "log --oneline --cherry master...HEAD"
```

## 踩过的坑

### 文件太大 push 不上去
有次不小心 commit 了一个 500MB 的日志文件，push 了半天没反应。后来用了 BFG Repo-Cleaner 才清理掉。

### merge 冲突没解决就 commit
长时间不解决冲突，代码会变得一团糟。我的习惯是：冲突当天解决，不隔夜。

### 搞混了 rebase 和 merge
有次在公共分支上做了 rebase，然后强制推送，结果同事拉代码时各种报错。从此记住：**公共分支用 merge，个人分支用 rebase**。

## 总结

Git 不需要学得很深，把常用的几个命令用好，配合适当的习惯，就能应对大多数场景。

我的建议：
1. 每次提交前看一眼 diff，确认没有不小心改了什么
2. commit message 写清楚干什么和为什么
3. 冲突及时解决，不要拖
4. 不确定的时候用 `git stash` 保底

### 合并分支，解决冲突
把feature/cli_fuck合并到master出现冲突提示：
```
➜  Note git:(master) ✗ git merge feature/cli_fuck
Auto-merging Git/command.md
CONFLICT (content): Merge conflict in Git/command.md
Automatic merge failed; fix conflicts and then commit the result.
```
到冲突文件Git/command.md查看，如下：

从<<<<<<< HEAD开始到=========之上，是当前所在分支的文档内容，
从===========到>>>>>>> feature/cli_fuck是要合并的分支内容，决定留下一个即可

如下是冲突文件标记：
<<<<<<< HEAD
```

查看当前分支状态
```
➜  Note git:(feature/cli_fuck) ✗ git status
On branch feature/cli_fuck
Your branch is up-to-date with 'origin/feature/cli_fuck'.

➜  Note git:(feature/cli_fuck) ✗ git add -A
➜  Note git:(feature/cli_fuck) ✗ git status
On branch feature/cli_fuck
Your branch is up-to-date with 'origin/feature/cli_fuck'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

  modified:   Git/command.md

commit:
➜  Note git:(feature/cli_fuck) ✗ git commit -m "just a fuck feature"
[feature/cli_fuck 42c4d8d] just a fuck feature
 1 file changed, 55 insertions(+)
```
=======
```

查看当前分支状态
```
➜  Note git:(feature/cli_fuck) ✗ git status
On branch feature/cli_fuck
Your branch is up-to-date with 'origin/feature/cli_fuck'.

➜  Note git:(feature/cli_fuck) ✗ git add -A
➜  Note git:(feature/cli_fuck) ✗ git status
On branch feature/cli_fuck
Your branch is up-to-date with 'origin/feature/cli_fuck'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

  modified:   Git/command.md

commit:
➜  Note git:(feature/cli_fuck) ✗ git commit -m "just a fuck feature"
[feature/cli_fuck 42c4d8d] just a fuck feature
 1 file changed, 55 insertions(+)
>>>>>>> feature/cli_fuck
```

修改后需要提交当前文件的改变，然后再次合并
➜  Note git:(master) ✗ git add -A
➜  Note git:(master) ✗ git commit -m "fix conflicts"
[master 61369d2] fix conflicts
➜  Note git:(master) git merge feature/cli_fuck
Already up-to-date.

## git merge --no-ff
```
D:\Work\crm-api>git merge --no-ff b2.1.0
Merge made by the 'recursive' strategy.
 src/controller/flow.js         |  12 ++-
 src/controller/stats.js        |   1 -
 src/controller/student.js      | 205 ++++++++++++++++++++++++++++++++++++++++-
 src/router/student.js          |   3 +
 src/scripts/800/importToCRM.js |  11 ++-
 src/service/payment.js         |   7 ++
 src/service/student.js         |   9 ++
 7 files changed, 238 insertions(+), 10 deletions(-)
```

## git merge (其实根本没有必要加上面的 --no-ff)
```
D:\Work\crm-api>git branch
  b2.0.0
  b2.1.0
  b2.2.0
  b2.2.1
* b2.2.2
  master

D:\Work\crm-api>git merge b2.2.1
Auto-merging src/controller/student.js
Merge made by the 'recursive' strategy.
 src/controller/stats.js   | 19 ++++++++++++++-----
 src/controller/student.js |  1 -
 2 files changed, 14 insertions(+), 6 deletions(-)
```
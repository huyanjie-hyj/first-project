# git学习记录
1. 查看分支
```
git branch // 查看本地分支
git branch -vv // 查看本地分支与远程分支之间的联系
```
2. 新建本地分支
```
git branch [新分支的名字]
```
3. 建立本地分支与远程分支之间的联系
```
git branch --set-upstream-to=origin/[远程分支名字]] [本地分支名字]
```
4. 删除本地分支
```
git branch -d [本地分支名字]
```
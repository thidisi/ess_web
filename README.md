# ESS Web Interface

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


**GIT FLOW**

Production branch: master
Development branch: develop
Feature branch: feature/feature-name
Hotfix branch: hotfix/hotfix-name

Feature flow:

Step1: Checkout new feature branch từ develop

    git checkout -b feature/add-auth origin/develop
   
 Step2: Khi xong tính năng cần fetch code từ branch develop về và rebase code mới nhất vào current branch.
 

    git fetch -p && git rebase -i origin/develop

> Trong quá trình làm, nếu 1 feature mất nhiều thời gian thì nên thường xuyên rebase code từ develop để tránh tính trạng conflict code.

Step3: Tạo merge request vào develop branch

Hotfix flow:

Step1: Checkout new hot fix branch từ master

    git checkout -b hotfix/fix-auth origin/master

Step2: Tạo merge request vào master branch

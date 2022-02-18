# ikth-count-v8-nextjs-jest-rtl-githubactions-2022

## Status

- 20220218: _succeeded i most test I wanted to do, but unfornately failed testing redux on nextjs_
  - _Because redux is already complicated to install on nextjs, when testing I needed redux Provider wrap, however it also required `pageProps` which can only be used on the `_app.js` file that is an nextjs props needed_
    - _I tried everything I could think of but there is not workaround I can find unless you decide to install redux in a different way which is going to further complicate things_
      - _So in the end I decided to remove Redux all together_
  - _Github Actions was deployed successfully using nextjs docker-compose Heroku_
    - _It would be nice to create a second Github Actions for pull request triggers, so that we can test the possible merge commits_
  - _I did BDD testing because TDD testing was too tricky at this point, perhaps when I get better than I move to TDD_

---

## Mission

- Wanted to test out:

  - react redux testing with jest & react-testing-library
  - Github Actions deploying on Heroku when git push master occured
    - It is nextjs with docker-compose too
  - sass with bootstrap

- Three route paths:
  - `/` = counter page
  - `/side` = whatever page
  - `/*` = error page

---

## Main technology / libraries / plugins used

- nextjs
- react
- Jest & React-Testing-Library (rtl)
- docker-compose
- Github Actions
- SASS with Bootstrap

  ***

  ## [ikth-count-v8-nextjs-jest-rtl-githubactions-2022](https://github.com/RechadSalma/ikth-count-v8-nextjs-jest-rtl-githubactions-2022)

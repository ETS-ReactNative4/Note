## Step 2 Configuring Package.json

## 登录npm
```
➜  leo-player git:(main) ✗ npm login
Username: leozbc
Password: 
Email: (this IS public) asdfpeng@qq.com
npm notice Please check your email for a one-time password (OTP)
Enter one-time password from your authenticator app: 48716029
Logged in as leozbc on https://registry.npmjs.org/.
```

## npm run build-library
```
➜  leo-player git:(main) ✗ npm run build-library

> leo-player@0.1.0 build-library /Users/mu/Repo/leo-player
> vue-cli-service build --target lib --name leo-player ./src/install.js


⠙  Building for production as library (commonjs,umd,umd-min)...

 DONE  Compiled successfully in 1455ms                                                                                                           5:14:36 PM

⠹  Building for production as library (commonjs,umd,umd-min)...

 DONE  Compiled successfully in 1588ms                                                                                                           5:14:36 PM



 DONE  Compiled successfully in 1583ms                                                                                                           5:14:36 PM

  File                          Size                                                        Gzipped

  dist/leo-player.umd.min.js    33.82 KiB                                                   11.95 KiB
  dist/leo-player.umd.js        100.76 KiB                                                  24.76 KiB
  dist/leo-player.common.js     100.37 KiB                                                  24.63 KiB
  dist/leo-player.css           6.49 KiB                                                    1.69 KiB

  Images and other types of assets omitted.
```

## npm publish
```
➜  leo-player git:(main) ✗ npm publish
npm notice 
npm notice 📦  leo-player@0.1.0
npm notice === Tarball Contents === 
npm notice 6.6kB   dist/leo-player.css           
npm notice 192B    dist/demo.html                
npm notice 102.8kB dist/leo-player.common.js     
npm notice 103.2kB dist/leo-player.umd.js        
npm notice 34.6kB  dist/leo-player.umd.min.js    
npm notice 1.3kB   package.json                  
npm notice 137.3kB dist/leo-player.common.js.map 
npm notice 137.9kB dist/leo-player.umd.js.map    
npm notice 162.3kB dist/leo-player.umd.min.js.map
npm notice 5.3kB   README.md                     
npm notice 677B    dist/img/back.a03e5a12.svg    
npm notice 1.6kB   dist/img/loading.fb7cc259.svg 
npm notice 744B    dist/img/lyric.19056cbc.svg   
npm notice 678B    dist/img/next.da8465ac.svg    
npm notice 702B    dist/img/pause.b8957a29.svg   
npm notice 537B    dist/img/play.5165061b.svg    
npm notice 1.0kB   dist/img/playlist.a9ed3eea.svg
npm notice 1.7kB   dist/img/speaker.e8a2aaec.svg 
npm notice === Tarball Details === 
npm notice name:          leo-player                              
npm notice version:       0.1.0                                   
npm notice package size:  180.0 kB                                
npm notice unpacked size: 699.1 kB                                
npm notice shasum:        d869201ab37e1da75890928a6521fea61e0a54af
npm notice integrity:     sha512-BFNQXQhQC1BaW[...]RKv1J4XxHSVTg==
npm notice total files:   18                                      
npm notice 
+ leo-player@0.1.0
```

Congratulations on having your first package published to NPM.

## 使用package


[link](https://5balloons.info/create-publish-you-first-vue-plugin-on-npm-the-right-way/)
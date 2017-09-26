# 10Print

the famous 10 print in various languages


# Usage

**For C#**

``` 
csc 10Print.cs && 10Print.exe
```

**For Javascript**

```
node 10Print.js
```
**For typescript**, you first need to install node typings

```
npm install --global ts-node
npm install --save-dev @types/node
```
then make a new file and name if tsconfig.json in root directory and add the following configuration in it.
```
{
    "compilerOptions": {
      "typeRoots": [
        "./node_modules/@types"
      ]
    }
  }
```
then run
```
ts-node 10Print.ts
```
**For python**
```
python 10Print.py
```

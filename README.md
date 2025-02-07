# Automation Testing Assessment on Saucedemo

Here is an Automation Testing task in UI level. The main focus is system testing process in an e-commerce platform.

## Recuirments

Before setting this porject, Please ensure this tools in your computer

- **Node.js** v20.18.0
- **npm** v10.9.2
- **Google Chrome** (latest version)
- **Allure Commandline** (Generating test reports. It is "OPTIONAL")

### Verify Installations

Run the following commands to check required dependencies are installed or not:

```bash
node -v   # Verify Node.js 
npm -v    # Verify npm
```

# Install & Setup

### 1. Install npm

```bash
npm install
```

### 1. Confogure WDIO

```bash
 capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--disable-extensions"],
        },
    },
    ],
```

#Running Test

###Run All test

```bash
npm run test
```

### Run Single Test

```bash
npx wdio wdio.conf.js --spec ./test/specs/lockedOutUser.spec.js
```

#Generate Test Report

### 1. Generate the Report

```bash
npm run getreport
```

# Troubleshooting

### 1. WebDriverIO Command If not work?
Run WebDriverIO:
```bash
npx wdio wdio.conf.js
```

### 2. Allure Command Not Found?
Install Allure globally:
Allure requires Java 8 or higher
```bash
npm install -g allure-commandline --save-dev
```



# Given Task Assesment

You are asking for automation tests on the (https://www.saucedemo.com/) site.

# Q1|[Mark 20] 

Try login with locked_out_user and verify the error message,

# Q2|[Mark 20] 

Login with standard_user. Then from the hamburger menu Reset App State. Then Add Any three items to the cart. Then navigate up to the final checkout page and verify all the product's name and the total price. Then finish the purchase journey and verify the successful order message. Then Reset the App State again and log out.

# Q3|[Mark 20] 

Login with performance_glitch_user and Reset App State. Then filter by name (Z to A) and select the first product into the cart. Then navigate up to the final checkout page and verify all the product's name and the total price. Then finish the purchase journey and verify the successful order message. Then Reset the App State again and log out.

Clone the project

```bash
    git clone https://github.com/sabbircse3/automation-saucedemo.git 
```
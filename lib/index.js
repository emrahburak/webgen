const shell = require('shelljs');
const readLine = require('readline').createInterface({
    input : process.stdin,
    output: process.stdout
})

const path = '.'
const urlRepo = 'git clone https://github.com/emrahburak/webpack-via-babel-basic-starter.git';

function checkName(name){

    nameSplit = name.split(" ");
    const res = Object.keys(nameSplit);
    if (res.length === 1){
        createRepo(name);
    }else{
        console.log('Wrong, splited repo name!!');

    }
}

function createRepo(name){
     shell.cd(path);
     shell.exec(urlRepo);
     shell.exec(`mv webpack-via** ${name}`);
     shell.exec(`rm -r ${name}/.git`);
     console.log(`${name} created!`);

}

module.exports = () => {

    readLine.question('Create repo name: ',name =>{
        if(name){
            checkName(name);

        }

        readLine.close();
    });

};


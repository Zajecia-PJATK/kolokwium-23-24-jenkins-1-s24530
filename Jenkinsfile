pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url:"https://github.com/Zajecia-PJATK/kolokwium-23-24-jenkins-1-s24530.git", branch:"main"
            }
        }

        stage('Setup enviroment'){
            steps{
                sh 'sudo apt-get install -y npm'
            }
        }
        stage('Budowanie i uruchamianie aplikacji') {
            steps {
                sh 'npm install'
                sh 'npm start'
            }
        }

        stage('Test') {
           steps {
                sh 'npm test'
            }
           
        }
       stage('Analiza statyczna kodu za pomocą ESLint') {
            steps {
                sh 'npm run lint'
            }
        }
    }
}

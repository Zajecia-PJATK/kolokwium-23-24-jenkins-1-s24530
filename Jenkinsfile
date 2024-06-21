pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git "https://github.com/Zajecia-PJATK/kolokwium-23-24-jenkins-1-s24530.git"
            }
        }
        stage('Build') {
            steps {
                script {
                    def app = docker.build("my-js-app")
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    def app = docker.image("my-js-app")
                    app.inside {
                        sh 'npm test'
                    }
                }
            }
            post {
                always {
                    junit 'test-results.xml'
                }
            }
        }
        stage('Lint') {
            steps {
                sh 'npm install eslint --save-dev'
                sh './node_modules/.bin/eslint .'
            }
        }
    }
}

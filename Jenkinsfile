pipeline {
    agent { docker 'node:6.10.3'}
    stages {
        stage('build') {
            steps {
                echo 'Building'
                sh 'npm install'
            }
        }
        stage('test') {
            steps {
                echo 'Testing...'
                sh 'npm test'
            }
        }
    }
}

pipeline {
    agent { docker 'node:6.3' }
    stages {
        stage('build') {
            steps {
                echo 'Building...'
                sh 'npm --version'
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

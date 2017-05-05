node {
    checkout scm
    def environment = docker.build('durian')
    environment.inside {
        stage('Build')
            echo 'Building...'
            sh 'npm install'

        stage('Test')
            echo 'Testing...'
            sh 'npm test'
    }
}

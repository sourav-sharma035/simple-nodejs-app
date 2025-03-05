pipeline {
    agent any
    tools {
        nodejs "NodeJS_20"
    }
    environment {
        CI = 'true'
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Pull the Laravel application from GitHub
                git branch: 'main', 
                url: 'https://github.com/sourav-sharma035/simple-nodejs-app.git'
            }
        }


        stage('Build Frontend') {
            steps {
                // If your Laravel app has a frontend build process
                sh 'npm install'
             //   sh 'npm run build'
            }
        }

        stage('Deploy to Server') {
            steps {
                // Copy files to the deployment directory
                echo 'Deploying Application...'

            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}

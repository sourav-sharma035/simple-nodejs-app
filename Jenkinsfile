pipeline {
    agent {
        label 'node02'  
    }

    environment {
        // Set environment variables (optional)
        DEPLOY_PATH = '/home/node2/simple-nodejs-app' // Change to your app's deployment path
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Pull the Laravel application from GitHub
                git branch: 'main', 
                credentialsId: 'credentialsId',
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
                 sh '''
                 rsync -avz ./ ${DEPLOY_PATH}/
                '''

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

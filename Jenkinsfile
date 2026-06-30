pipeline{
    agent{
        docker{
            image 'python:3.11'
            args '--network=ci-net'
        }
    }
    environment{
        DB_NAME = "jobapplication"
        DB_USER = "postgres"
        DB_PASSWORD = "password123"
        DB_HOST = "localhost"
        DB_PORT = "5432"
    }
    stages{
        stage('checkout'){
            steps{
                checkout scm
            }
            
        }
        stage('Debug'){
            steps{
                
                sh"""
                pwd
                ls -la
            """
            }
            

        }
        stage('Start Postgres Container'){
            steps{
               sh 'docker run -d --name pg --network=ci-net -e POSTGRES_PASSWORD=pass postgres:16'
            }
        }
        stage('Install'){
            steps{
                sh"""
                cd backend
                python3 -m venv myvenv
                . myvenv/bin/activate
                pip install -r requirements.txt
            """
            }
            
        }
        stage('Test'){
            steps{
                sh"""
                cd backend
                . myvenv/bin/activate
                python3 manage.py test
            """
            }
            
        }
    }
}
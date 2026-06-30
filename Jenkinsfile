pipeline{
    agent any
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
                sh '''
                    docker rm -f jenkins-postgres || true

                     docker run -d \
                    --name jenkins-postgres \
                    -e POSTGRES_DB=jobapplication \
                    -e POSTGRES_USER=postgres \
                    -e POSTGRES_PASSWORD=password123 \
                    -p 5432:5432 \
                    postgres:16
                '''
            }
        }

        stage('Wait for Start Postgres'){
            steps{
                sh '''
                    until docker exec jenkins-postgres pg_isready -U postgres
                    do
                        echo "waiting for postgreSQL.."
                        sleep2 
                    done
                '''
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
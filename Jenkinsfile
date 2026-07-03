pipeline{
    agent any
    environment{
        IMAGE_TAG="${BUILD_NUMBER}"
        USE_SQLITE = 'True'
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

        stage('Install'){
            steps{
                dir('backend'){
                sh"""
                
                python3 -m venv myvenv
                . myvenv/bin/activate
                pip install -r requirements.txt
            """
                }
                
            }
            
        }
        stage('Test'){
            steps{
                dir('backend'){
                sh"""
                    
                    . myvenv/bin/activate
                    python3 manage.py test
            """
                }
                
            }
            
        }

        stage('build backend docker Image'){
            when{
                branch 'main'

            }
            steps{
                dir('backend'){
                    sh"""
                    
                    docker build -t sanjay7708/django-jenkins:${IMAGE_TAG} .
                    docker tag sanjay7708/django-jenkins:${IMAGE_TAG} sanjay7708/django-jenkins:latest
                    
                """ 
                }
                
            }
        }

        stage('push backend image'){
            when{
                branch 'main'
            }
            steps{
                script{
                    docker.withRegistry('https://index.docker.io/v1/','dockerhub'){
                        sh """
                            docker push sanjay7708/django-jenkins:${IMAGE_TAG}
                            docker push sanjay7708/django-jenkins:latest
                        """
                    }
                }
            }
        }
        stage('build frontend docker Image'){
            when{
                branch 'main'

            }
            steps{
                dir('frontend/jobsite'){
                    sh"""
                    docker build -t sanjay7708/react-jenkins:${IMAGE_TAG} .
                    docker tag sanjay7708/react-jenkins:${IMAGE_TAG} sanjay7708/react-jenkins:latest
                """ 
                }
                
            }
        }

        stage('push frontend image'){
            when{
                branch 'main'
            }
            steps{
                script{
                    docker.withRegistry('https://index.docker.io/v1/','dockerhub'){
                        sh """
                            docker push sanjay7708/react-jenkins:${IMAGE_TAG}
                            docker push sanjay7708/react-jenkins:latest
                        """
                    }
                }
            }
        }

        
    }
}
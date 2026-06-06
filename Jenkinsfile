node{
    stage('Install'){
        sh """
        cd backend
        pip install -r requirements.txt
        """
    }

    stage("Test"){
        sh """
        cd backend
        python3 manage.py test
        """
    }
    
}
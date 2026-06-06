node{
    stage('Install'){
        sh """
        cd backend
        pip install -r requirements.txt
        """
    }

    stage("Test"){
        sh """
        pwd
        ls -l
        cd backend
        python3 manage.py test
        """
    }

}
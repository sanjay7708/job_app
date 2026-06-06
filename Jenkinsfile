node {

    stage('Checkout') {
        checkout scm
    }

    stage('Debug') {
        sh '''
        pwd
        ls -la
        '''
    }

    stage('Install') {
        sh '''
        cd backend
        pip install -r requirements.txt
        '''
    }

    stage('Test') {
        sh '''
        cd backend
        python3 manage.py test
        '''
    }
}
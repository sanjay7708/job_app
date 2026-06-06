from rest_framework.test import APITestCase
from django.contrib.auth.models import User
from django.urls import reverse
from rest_framework import status
class LoginApiTest(APITestCase):
    def setUp(self):
        self.user=User.objects.create_user(
            username='sanjay',
            password='7708'
        )
        self.login_url=reverse('login')
        self.singup_url=reverse('signup')
        self.logout_url=reverse('logout')
    
    def test_login_success(self):
        data={
            'username':'sanjay',
            'password':'7708'
        }
        response=self.client.post(self.login_url,data)
        self.assertEqual(response.status_code,status.HTTP_200_OK)
        self.assertEqual(response.data['message'],'login successfully')
    
    def test_logout_failed(self):
        data={
            'username':'sanjay',
            'password':'1234'
        }
        response=self.client.post(self.login_url,data)
        self.assertEqual(response.status_code,status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(response.data['message'],'invalid credentials')
    
    def test_sigup_success(self):
        data={
            'username':'newuser',
            'email':'newuser@gmail.com',
            'password':'1234',
            'confirm_password':'1234'
        }
        response=self.client.post(self.singup_url,data)
        
        self.assertEqual(response.status_code,status.HTTP_201_CREATED)
    
    def test_signup_failed(self):
        data={
            'username':'sanjay',
            "email":"sanjay@gmail.com",
            "password":'7708',
            "confirm_password":'7708'
        }
        response=self.client.post(self.singup_url,data)
        self.assertEqual(response.status_code,status.HTTP_400_BAD_REQUEST)
    
    def test_logout_success(self):
        response=self.client.post(self.logout_url)
        self.assertEqual(response.status_code,status.HTTP_200_OK)
        
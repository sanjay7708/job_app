from django.shortcuts import render
from rest_framework.views import APIView
from django.contrib.auth import authenticate,login,logout
from rest_framework.response import Response
from .serializer import signupSerializer
from rest_framework import status
# Create your views here.

class LoginView(APIView):
    def post(self,request):
        data=request.data
        username=data.get('username')
        password=data.get('password')
        user=authenticate(username=username,password=password)
        if user:
            login(request,user)
            return Response({'message':'login successfully'},status=status.HTTP_200_OK)
        return Response({'message':'invalid credentials'},status=status.HTTP_401_UNAUTHORIZED)
        

class SignupView(APIView):
    def post(self,request):
        serializer=signupSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message':'User Register Successfully'},status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        
class LogoutView(APIView):
    def post(self,request):
        logout(request)
        return Response({'message':'logout sucessfully'},status=status.HTTP_200_OK)
    
        
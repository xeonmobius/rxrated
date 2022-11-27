from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status, generics, mixins


from backend.models import Pharmacies
from .serializers import PharmaciesSerializer

from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout

class PharmaciesView(generics.ListAPIView):
    queryset = Pharmacies.objects.all()
    serializer_class = PharmaciesSerializer
    
class PharmacyView(generics.RetrieveAPIView):
    queryset = Pharmacies.objects.all()
    serializer_class = PharmaciesSerializer


@api_view(['GET'])
def get_a_pharmacy(request, pk):
    pharmacies = Pharmacies.objects.get(id=pk)
    serialzer = PharmaciesSerializer(pharmacies, many=False)

    return Response(serialzer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def add_data(request):
    serializer = PharmaciesSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def signin(request):
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')

    user = authenticate(username=username, email=email, password=password)

    if user is not None:
        login(request, user)
        return Response("Logged in!", status=status.HTTP_200_OK)

    messages.error(request, "Bad Credentials!")
    return Response("failed", status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def signout(request):
    logout(request)
    messages.success(request, "You successfully logged out.")
    return Response("You successfully logged out.", status=status.HTTP_200_OK)


@api_view(['POST'])
def signup(request):
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')

    if User.objects.filter(username=username):
        messages.error(
            request, "Username already exist! Please signin or use account recovery.")
        return Response("Username exists.")

    # create_user() will actually hash the password
    my_user = User.objects.create_user(
        username=username, password=password, email=email)

    my_user.save()

    messages.success(request, "Your account was successfully created.")
    return Response("Sign up successful", status=status.HTTP_200_OK)

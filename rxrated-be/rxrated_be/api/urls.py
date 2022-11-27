from django.urls import path
from . import views

urlpatterns = [
    path('pharmacy/', views.PharmaciesView.as_view()),
    path('pharmacy/<int:pk>/', views.PharmacyView.as_view()),
    path('add/', views.add_data),
    path('signin/', views.signin),
    path('signout/', views.signout),
    path('signup/', views.signup),
]
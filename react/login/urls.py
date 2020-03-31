from django.urls import path
from login import views

from django.conf.urls import url, include

urlpatterns = [
    path('login',views.ActivityPeriodViewsets.as_view()),
    path('register',views.RegisterViewsets.as_view())
]

from django.urls import path
from trackactivity import views

from django.conf.urls import url, include

urlpatterns = [
    path('login',views.ActivityPeriodViewsets.as_view()),
    path('register',views.RegisterViewsets.as_view())
]

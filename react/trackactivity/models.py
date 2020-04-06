from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class ActivityPeriod(models.Model):
    start_time = models.CharField(null=True,blank=True,max_length=255)
    end_time=  models.CharField(null=True,blank=True,max_length=255)
    userid = models.ForeignKey(User, on_delete=models.CASCADE, null=True)



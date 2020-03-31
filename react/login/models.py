from django.db import models
from django.contrib.auth.models import User
# Create your models here.

'''
model to record activity period of users.
'''
class ActivityPeriod(models.Model):
    start_time = models.DateTimeField(null=True,blank=True)
    end_time=  models.DateTimeField(null=True,blank=True)
    userid = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

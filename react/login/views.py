from login.models import ActivityPeriod
from django.contrib.auth import authenticate,login
from rest_framework import viewsets
from rest_framework.generics import GenericAPIView
from django.contrib.auth.models import User
from datetime import datetime, timedelta
from django.conf import settings
from django.http import JsonResponse
from .serializers import ActivityPeriodSerializer



class ActivityPeriodViewsets(GenericAPIView):
    def post(self,request):
        response={'status':0,'message':'Invalid Credential'}
        data = request.data
        user_queryset=User.objects.filter(username=data['username'])
        check_if_user_exists = user_queryset.exists()

        if check_if_user_exists:
            user = authenticate(username=data['username'], password=data['password'])
        #     data_activity={
        #         'start_time':datetime.now(),
        #         'userid_id':user_queryset.first().id
        #     }
        #     ActivityPeriod.objects.create(**data_activity)
            if user:
                response={'status':1,'message':'Login Successful','id':user_queryset.first().id}
           
        return JsonResponse(response,safe=False)


    def get(self,request):
        data_user=[]
        for i in User.objects.all():
            activity_queryset=ActivityPeriod.objects.filter(userid=i.id)
            serializer_class = ActivityPeriodSerializer(activity_queryset,many=True)
            data_user.append({
                'id':i.id,
                'firstname':i.first_name,
                'lastname':i.last_name,
                'email':i.email,
                'activity_period':serializer_class.data
                }
            )
        response={'status':1,'message':"DataFound",'result':data_user}
        return JsonResponse(response,safe=False)

    def put(self,request):
        
        data = request.data
        queryset_activity=ActivityPeriod.objects.filter(userid=data['userid'],end_time=None).update(end_time=datetime.now())
        response={'status':1,'message':'Checked Out'}
        return JsonResponse(response,safe=False)





class RegisterViewsets(GenericAPIView):
    def post(self,request):
        dataset={}
        response={}
        data=request.data
        user_querset=User.objects.filter(username=data['username'])
        print(User._meta.get_fields())
        if user_querset:
            response={'status':0,'message':'Username Already exists'}
        else:
            dataset={
                'first_name':data['first_name'],
                'last_name':data['last_name'],
                'username':data['username'],
                'password':data['password'],
                'email':data['email'],
            }
            user_queryset=User.objects.create(**dataset)
            response={'status':1,'message':'Registration Successfull','id':user_queryset.id}
           
        return JsonResponse(response,safe=False)


















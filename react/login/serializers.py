from rest_framework import serializers
from login.models import ActivityPeriod
class ActivityPeriodSerializer(serializers.ModelSerializer):
    start_time = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
    end_time = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
    class Meta:
        model = ActivityPeriod
        fields='__all__'
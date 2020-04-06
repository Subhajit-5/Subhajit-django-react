from rest_framework import serializers
from trackactivity.models import ActivityPeriod
class ActivityPeriodSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActivityPeriod
        fields='__all__'
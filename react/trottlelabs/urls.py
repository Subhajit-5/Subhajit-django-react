from django.contrib import admin
#from login import urls
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/', include('trackactivity.urls')),
    re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
]

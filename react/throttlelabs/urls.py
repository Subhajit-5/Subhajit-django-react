
from django.contrib import admin
from django.urls import path,include,re_path
from django.views.generic import TemplateView
#from login import urls


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/', include('login.urls')),
    re_path('.*',TemplateView.as_view(template_name='index.html'))
]
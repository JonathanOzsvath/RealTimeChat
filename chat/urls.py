from django.conf.urls import url
from django.urls import path
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^new/$', views.new_room, name='new_room'),
    url(r'^(?P<room_name>[\w-]{,50})/$', views.room, name='room'),
]

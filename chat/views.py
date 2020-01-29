# chat/views.py
from django.db import transaction
from django.shortcuts import render, redirect
from haikunator import Haikunator


def index(request):
    return render(request, 'chat/index.html', {})


def new_room(request):
    """
    Randomly create a new room, and redirect to it.
    """
    room_name = Haikunator().haikunate()
    return redirect(room, room_name=room_name)


def room(request, room_name):
    return render(request, 'chat/room.html', {
        'room_name': room_name
    })

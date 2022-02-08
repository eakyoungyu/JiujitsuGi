from django.shortcuts import render
from django.http import HttpResponse


def all_brands(request):
    return HttpResponse(content="<h1>HOME</h1>")

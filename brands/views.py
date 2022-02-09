from django.shortcuts import render
from django.views.generic import ListView
from . import models


class HomeView(ListView):

    """HomeView Definition"""

    model = models.Brand
    context_object_name = "brands"

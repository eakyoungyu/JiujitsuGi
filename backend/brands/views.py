from django.shortcuts import render
from django.views.generic import ListView, DetailView
from . import models


class HomeView(ListView):

    """HomeView Definition"""

    model = models.Brand
    context_object_name = "brands"
    template_name = "index.html"


class BrandDetail(DetailView):
    model = models.Brand

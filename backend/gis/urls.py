from django.urls import path
from . import views

app_name = "gis"

urlpatterns = [
    path("<int:pk>", views.GiDetail.as_view(), name="detail"),
]

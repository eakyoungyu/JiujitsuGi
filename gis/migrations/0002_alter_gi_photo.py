# Generated by Django 4.0.2 on 2022-02-02 07:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gis', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gi',
            name='photo',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]

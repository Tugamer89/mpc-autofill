# Generated by Django 3.2.3 on 2021-06-02 11:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("cardpicker", "0012_auto_20210518_2352"),
    ]

    operations = [
        migrations.AlterField(
            model_name="source",
            name="drive_link",
            field=models.CharField(max_length=100, unique=True),
        ),
    ]

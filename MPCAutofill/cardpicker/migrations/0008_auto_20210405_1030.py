# Generated by Django 3.0.8 on 2021-04-05 00:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("cardpicker", "0007_auto_20210405_0043"),
    ]

    operations = [
        migrations.CreateModel(
            name="DFCPair",
            fields=[
                (
                    "front",
                    models.CharField(max_length=200, primary_key=True, serialize=False),
                ),
                ("back", models.CharField(max_length=200, unique=True)),
            ],
        ),
        migrations.RemoveField(
            model_name="source",
            name="qty_cardbacks",
        ),
        migrations.RemoveField(
            model_name="source",
            name="qty_cards",
        ),
        migrations.RemoveField(
            model_name="source",
            name="qty_tokens",
        ),
    ]

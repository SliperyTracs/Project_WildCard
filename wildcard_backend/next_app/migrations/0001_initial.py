# Generated by Django 4.1.3 on 2022-11-15 10:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Menus',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=200)),
                ('Description', models.CharField(max_length=255)),
                ('Votes', models.IntegerField()),
                ('dateCreated', models.DateField(auto_now=True)),
            ],
            options={
                'db_table': 'menus',
            },
        ),
    ]
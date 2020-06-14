from django.urls import reverse
from rest_framework.test import APITestCase, APIClient
from rest_framework.views import status
from .models import Heroes
from .serializers import HeroesSerializer

# tests for views


class BaseViewTest(APITestCase):
    client = APIClient()

    @staticmethod
    def create_hero(name="", primary_attr="", attack_type="", roles=""):
        if name != "" and primary_attr != "" and attack_type != "" and roles != "":
            Heroes.objects.create(name = name, primary_attr = primary_attr, attack_type = attack_type, roles = roles)

    def setUp(self):
        self.create_hero("Anti-Mage", "Agility", "Melee", "[Carry, Escape, Nuker]")
        self.create_hero("Batrider", "Intelligence", "Ranged", "[Initiator, Jungler, Disabler, Escape]")
        self.create_hero("Legion Commander", "Strength", "Melee", "[Carry, Disabler, Initiator, Durable, Nuker]")


class GetAllHeroesTest(BaseViewTest):
    def test_get_all_heroes(self):
        response = self.client.get(
            reverse("heroes-all", kwargs={"version": "v1"})
        )
        expected = Heroes.objects.all()
        serialized = HeroesSerializer(expected, many = True)
        self.assertEqual(response.data, serialized.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
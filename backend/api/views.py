import requests
from django.http import JsonResponse
from django.conf import settings

# Phase 1: city list
def city_list(request):
    cities = [
        "Paris", "London", "New York", "Tokyo", "Sydney",
        "Rome", "Barcelona", "Dubai", "Singapore", "Istanbul"
    ]
    return JsonResponse(cities, safe=False)

# Phase 2: basic info mock
def city_info(request, city):
    # Call Pexels API
    headers = {
        "Authorization": settings.PEXELS_API_KEY
    }
    url = f"https://api.pexels.com/v1/search?query={city}&per_page=6"
    response = requests.get(url, headers=headers)

    # Default image list
    image_urls = []

    if response.status_code == 200:
        data = response.json()
        image_urls = [photo["src"]["medium"] for photo in data["photos"]]

    # Mock AI summary data
    data = {
        "summary": f"{city} is a great tourist destination.",
        "places": ["Main Place 1", "Main Place 2", "Main Place 3"],
        "tips": ["Best season: Spring", "Use public transport", "Try local food"],
        "images": image_urls,
    }

    return JsonResponse(data)
print("PEXELS KEY:", settings.PEXELS_API_KEY)


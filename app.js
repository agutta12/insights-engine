const apiUrl = 'https://insightssummary.azurewebsites.net/api/getAllInsights';

async function fetchInsights() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        displayInsights(data);
    } catch (error) {
        console.error('Failed to fetch insights:', error);
    }
}

function displayInsights(insights) {
    const container = document.getElementById('insights-container');
    container.innerHTML = ''; // Clear previous content
    insights.forEach(insight => {
        const insightDiv = document.createElement('div');
        insightDiv.innerHTML = `
            <h3>${insight.insight_type.name}</h3>
            <p>${insight.content}</p>
        `;
        container.appendChild(insightDiv);
    });
}

fetchInsights();

# Backend
FROM python:3.9
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
CMD ["python", "app.py"]

# Frontend
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]

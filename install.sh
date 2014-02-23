# replace project name
echo -e "\e[36mProject name: \e[0m"
read -r PROJECT_NAME
sed -i "s/\%project_name\%/${PROJECT_NAME}/g" *.*

# replace author name
AUTHOR_NAME=$(git config user.name)
AUTHOR_EMAIL=$(git config user.email)
sed -i "s/\%author\%/${AUTHOR_NAME} <${AUTHOR_EMAIL}>/g" *.*

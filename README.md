# ArgoCD-playground

**Install minikube:**<br>
https://minikube.sigs.k8s.io/docs/start/?arch=%2Fwindows%2Fx86-64%2Fstable%2F.exe+download <br>

* Start minikube: ***$ minikube start*** <br>

**Install ArgoCD:**<br>
https://argo-cd.readthedocs.io/en/stable/getting_started/ <br>

**Forward port to access ArgoCD UI:**<br>
>***$ kubectl port-forward -n argocd svc/argocd-server 8080:443*** <br>

Enter the IP that you see, in your browser and add port 8080 to it **(for eg. 127.0.0.1:8080)**, hit **ENTER**. <br> You will see a warning, ignore it for now.
Enter Advanced > Proceed to 127.0.0.1:8080. <br><br>
***BOOM!*** You're on the ArgoCD **login** page.<br>

![login page](images/argocd%20login%20page.png)

**Steps to login** <br>
Open a new terminal tab. Run the following command to get ArgoCD UI password:<br>

>***$ kubectl get secret argocd-initial-admin-secret -n argocd -o yaml*** <br>

Copy the password value and run below command to decode it using base64:
>***$ echo < password > | base64 --decode***
copy this password<br>

Login into the ArgoCD UI using following credentials:<br>
admin<br>
password from previous step and you will login successfully.<br><br>
![logged in](images/argocd%20welcome%20page.png)<br>
**Create application inside ArgoCD:**<br>
Create your deployment and service manifests as under ***"k8s"*** folder <br>
Configure as specified under ***"argo-config/application.yml"***<br>
Run the following command to create an application inside argocd where the kubernetes resources will be created:<br>
> ***$ kubectl apply -f argo-config/application.yml***<br>

The application will be deployed inside argocd.<br>
![app created](images/argo%20application%20synced.png)<br>
Click the application card to open and see details about it.<br><br>
![app details](images/argo%20application%20synced2.png)<br>
>>>>**Test GitOps!!!!**

Change the image tag in ***k8s/deployment.yml*** from ***1.0*** to ***1.2*** and push the changes to git. You will notice that the application will be synced automatically in 3 minutes (*ArgoCD default configuration*).<br>
![app synced again](images/argo%20application%20synced3.png)<br>
>Notice the "rev:" tag in deployment card and commit tag near HEAD beside the green "Sync" status above ;)

*Thank you for following along, you have successfully deployed a test application on kubernetes.* ***Hit a Star if you liked the tutorial :)***
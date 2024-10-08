# ArgoCD-playground

**Install minikube:**<br>
https://minikube.sigs.k8s.io/docs/start/?arch=%2Fwindows%2Fx86-64%2Fstable%2F.exe+download <br>

* Start minikube: ***$ minikube start*** <br>

**Install ArgoCD:**<br>
https://argo-cd.readthedocs.io/en/stable/getting_started/ <br>

**Forward port to access ArgoCD UI:**<br>
>***$ kubectl port-forward -n argocd svc/argocd-server 8080:443*** <br>

Enter the IP **(127.0.0.1:8080)** in browser and add port 8080 to it, hit **ENTER**. <br> You will see a warning, ignore it for now.
Enter Advanced > Proceed to 127.0.0.1:8080. <br><br>
***BOOM!*** You're on the ArgoCD **login** page.<br>
Open a new terminal tab. Run the following command to get ArgoCD UI password:<br>

>***$ kubectl get secret argocd-initial-admin-secret -n argocd -o yaml*** <br>

Copy the password value and run below command to decode it using base64:
>***$ echo < password > | base64 --decode***
copy this password<br>

Login into the ArgoCD UI using following credentials:<br>
admin<br>
password from previous step